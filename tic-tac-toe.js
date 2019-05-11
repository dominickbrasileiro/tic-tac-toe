const tic_tac_toe = {

    board: ["","","","","","","","",""],
    symbol: {
        options: ["X", "O"],
        index: 0,

        turn: function(){
            return this.options[this.index];
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
    gameover: false,
    container_element: null,

    init: function(container){
        this.container_element = container;
        this.draw();
    },

    start: function(){
        this.gameover = false;
        this.symbol.index = 0;
        this.board.fill("");
        this.draw();
    },

    make_play: function(position){
        if (!this.gameover) {
            if (this.board[position] === "") {
                let turn = this.symbol.turn();
                this.board[position] = turn;
                this.draw();
                if (this.check_winning_sequences(turn) >= 0) {
                    this.gameover = true;
                    return false;
                }
                this.symbol.turn_change();
            }
            return false;
        }

        this.start();


    },

    check_winning_sequences: function(symbol){
        for(let i in this.winning_sequences){
            if(this.board[this.winning_sequences[i][0]] === symbol &&
                this.board[this.winning_sequences[i][1]] === symbol &&
                this.board[this.winning_sequences[i][2]] === symbol) {
                    return i;
            }
        }

        return -1;
    },

    draw: function(){
        let content = "";

        for (let i in this.board){
            content += `<div onclick="tic_tac_toe.make_play(${i})">${this.board[i]}</div>`;
        }

        this.container_element.innerHTML = content;
    }
};