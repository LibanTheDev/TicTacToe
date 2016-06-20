var state = function(old) {

	this.turn = "";
	this.oMovesCount =0;
	this.result = "running";
	this.board = [];

	if(typeof old !=="undefined") {

		var leng = old.board.length;
		this.board = new Array(leng);
		for(var i=0; i<leng;i++){
			this.board[itr] = old.board[itr];

		}
		this.oMovesCount = old.oMovesCount;
		this.result = old.result;
		this.turn = old.turn;

	}

		this.advanceTurn = function() {
			this.turn = this.turn==="X"?"O":"X";

		}
		this.emptyCells = function() {

			var indexs = [];
			for(var i=0; i<9; i++){
				if(this.board[i]==="E"){
					indexs.push(i);
				}
			}
			return indexs;
		}

		this.isTerminal = function() {
			var B = this.board;
			//check rows
			for(var i=0; i<=6; i=i+3){

				if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
					this.result = B[i] + "-won"; //update the state result
                	return true;
				}
			}
			//check columns
			 for(var i = 0; i <= 2 ; i++) {
            if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }
        	//check diagonals
          for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }



        	var available = this.emptyCells();
        	if(available.length==0) {

        		this.result = "draw";
        		return true;
        	}
        	else{
        		return false;
        	}


		}


}