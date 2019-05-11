const tic_tac_toe = {

    board: ['','','','','','','','',''],
    container_element: null,

    init: function(container){
        this.container_element = container;
        this.draw();
    },

    draw: function(){
        for (let i in this.board){
            this.container_element.innerHTML += `<div>${this.board[i]}</div>`;
        }
    }
};