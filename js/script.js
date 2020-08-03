model = {
    items:[]
}

view = {
    clearList: function() {
        var range = document.createRange();
        range.selectNodeContents(document.getElementById("list"));
        range.deleteContents();
    },
    render: function(){

        this.clearList()

        if(model.items.length !=0 ){
            list= document.getElementById("list")
            for(var i=0; i< model.items.length; i++){
                item = document.createElement("li")
                span = document.createElement("span")
                check = document.createElement("a")
                cross = document.createElement("a")
                iconCheck = document.createElement("i")
                iconCross = document.createElement("i")
                
                item.className = "item"
                span.classsName = "item-text"
                cross.className = "item-delete"
                check.className = "item-complete"
                

                span.textContent = model.items[i].text

                if(model.items[i].completed){
                    item.classList.add("completed")
                }

                
                iconCross.setAttribute("class", "icon icon-trash")
                iconCheck.setAttribute("class", "icon icon-checkmark")
                iconCheck.setAttribute("data-id", i)
                iconCross.setAttribute("data-id", i)

                
                cross.setAttribute("onclick", "controller.deleteItem('"+ i +"')")
                check.setAttribute("onclick", "controller.completeItem('"+ i +"')")
                

                cross.appendChild(iconCross)
                check.appendChild(iconCheck)
                item.appendChild(span)
                item.appendChild(check)
                item.appendChild(cross)

                list.appendChild(item)
            }
        }

        if (list.clientHeight == 295){
            list.setAttribute('class', 'height-295')
        };

    },
    addItem: function(e){
        if((e.code == "Enter") || e.code=="NumpadEnter"){
            if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) {
				item = document.getElementById("add-item").value;
	        	controller.addItem(item);
	        	return false;	
            }
        }
    }

}

controller = {
    /* We call our render function as we always wan to refresh our view when we update something */
    init: function(){
        view.render()
    },
    addItem: function(item){
        list_item = {text:item, completed:false}
        model.items.push(list_item)
        document.getElementById("add-item").value = ""
        view.render()
    },
    completeItem: function(item_index){
        model.items[item_index].completed = !model.items[item_index].completed
        view.render()
    },
    deleteItem: function(item_index) {
        model.items.splice(item_index, 1)
        view.render()
    }
}

