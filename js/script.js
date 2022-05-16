
const app = new Vue (
    {
        el:'#root',
        data: {

            toDo: [
                {
                    text: 'fare la spesa',
                    done: true
                },
                {
                    text: 'mettere in ordine casa',
                    done: false
                },
                {
                    text:'sistemare il giardino',
                    done:true
                }

            ],

            newToDo: '',
            searchList: '',

        },
        
        methods: {
            addToDo: function () {
                const trimmedInput = this.newToDo.trim();
                if (trimmedInput !== '') {

                const newObj= {
                    text: trimmedInput,
                    done: true
                };
                    
                this.toDo.push(newObj)
                this.trimmedInput = '';
                };
            },

            removeThisItem: function (index) {
                this.toDo.splice(index,1)  
            },

            startSearch: function () {
                this.toDo.forEach((item) => { 
    
                    const formattedDataToSearch = item.text.toLowerCase();
                    const formatedSearchInput = this.searchList.toLowerCase();
    
                    if (formattedDataToSearch.includes(formatedSearchInput)) {
                        item.done = true;
                    } else {
                        item.done = false
                    };
                
                })

            },

                
                    
                

                
        
    }

});