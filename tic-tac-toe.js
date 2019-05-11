const tic_tac_toe = {

    board: ["","","","","","","","",""],
    symbol: {
        options: ["X", "O"],
        index: 0,

        turn: function(){
            let turn = this.options[this.index];
            this.turn_change();
            return turn;
        },

        turn_change: function(){
            if (this.index === 0 ? this.index = 1 : this.index = 0);
        }
    },

    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    
    container_element: null,

    init: function(container){
        this.container_element = container;
        this.draw();
    },

    make_play: function(position){
        if (this.board[position] === "") {
            this.board[position] = this.symbol.turn();
            this.draw();
        }

        return false;

    },

    draw: function(){
        let content = "";

        for (let i in this.board){
            content += `<div onclick="tic_tac_toe.make_play(${i})">${this.board[i]}</div>`;
        }

        this.container_element.innerHTML = content;
    }
};