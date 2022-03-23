const form=document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btndelete=document.querySelector('#deleteAll');
const tasklist=document.querySelector('#task-list');
var items;
const loadbtn=document.querySelector('#load');

eventListeners();




function eventListeners(){
    form.addEventListener('submit',addNewItem);
    tasklist.addEventListener('click',deleteItem);
    btndelete.addEventListener('click',deleteAll);
    loadbtn.addEventListener('click',loadItems);

}
  
function getItemsFromLS()
{
    if(localStorage.getItem('items')===null)
    {
        items=[];

    }
    else{
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
function setItemtoLS(text)
{
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

function loadItems(){
    items=getItemsFromLS();
    items.forEach(function(item2){
        createItem(item2);
    })
}

function createItem(text1)
{
    var li=document.createElement('li');
    li.className='list-group-item bg-secondary';
    var text=document.createTextNode(text1);
    li.appendChild(text);
    var a=document.createElement('a');
    a.className='delete-item float-end';
    a.setAttribute('href','#')
    a.setAttribute('style','text-decoration:none;')
    a.innerHTML='<i class="fas fa-times"></i>';
    li.appendChild(a);
    document.querySelector('#task-list').appendChild(li);
}

function addNewItem(e){
    if(input.value=='')
    {
        alert('Add new item');
    }
    var li=document.createElement('li');
    li.className='list-group-item bg-secondary';
    var text=document.createTextNode(`${input.value}`)
    li.appendChild(text);
    var a=document.createElement('a');
    a.className='delete-item float-end';
    a.setAttribute('href','#')
    a.setAttribute('style','text-decoration:none;')
    a.innerHTML='<i class="fas fa-times"></i>';
    li.appendChild(a);
    document.querySelector('#task-list').appendChild(li);
    setItemtoLS(input.value);
    e.preventDefault();
    

}
function deleteItem(e)
{

    if(e.target.parentElement.className=='delete-item float-end')
    {
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        deleteItemLs(e.target.parentElement.parentElement.innerText);
        console.log(e.target.parentElement.parentElement.innerText);  
    }
        
        
    }
    
    
    

 e.preventDefault();
}

function deleteItemLs(text)
{
  items=getItemsFromLS();
  items.forEach(function(item,index)
  {
      if(item===text)
      {
          items.splice(index,1);
      }
  });
  localStorage.setItem('items',JSON.stringify(items));
}

function deleteAll(e)
{
    if(confirm('Are you sure?'))
    {
    //tasklist.innerHTML='';
    var i=0;
    var count=document.querySelector('#task-list').childElementCount;
    localStorage.clear();
    while(count > i)
     {
        document.querySelector('.list-group-item').remove();
        i++;
        
     }
     
    /*while(tasklist.firstChild)
    {
        tasklist.firstChild.remove();
    }*/
    }

}