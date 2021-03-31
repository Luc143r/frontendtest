
//Card draggable

var check_box = document.getElementById('check_box');
var card = document.getElementsByClassName('card');

for (var i = 0; i in card; i++) {

    if (check_box.checked) {
        card[i].setAttribute('draggable', 'true');
    }
    if (!check_box.checked) {
        card[i].setAttribute('draggable', 'false');
    }

}


//Draggable ON/OFF

function checkMove() {

    var card = document.getElementsByClassName('card');
    var check_box = document.getElementById('check_box');

    for (var i = 0; i in card; i++) {
        if (check_box.checked) {
            card[i].setAttribute('draggable', 'true');
        }
        if (!check_box.checked) {
            card[i].setAttribute('draggable', 'false');
        }
    }

}


// Pin card

function pin_card() {
    if (localStorage.getItem(drag_card.id) == 0) {
        localStorage.setItem(drag_card.id, 1);
        return;
    } else {
        localStorage.setItem(drag_card.id, 0);
        return;
    }

}


// Dragabble card

let drag_card;

function moveCard(e) {
    
    if (drag_card.getAttribute('draggable') == 'true'){
        drag_card.style.left = e.pageX + 'px';
        drag_card.style.top = e.pageY + 'px';
        coord_card = [drag_card.style.left, drag_card.style.top];
        localStorage.setItem(drag_card.id, coord_card);
    } else {
        return;
    }

    

}

document.addEventListener('click', function(e) {
    drag_card = document.getElementById(e.target.id);
    var attr_draggable = drag_card.getAttribute('draggable');
    if (e.target.id == 'card1' || e.target.id == 'card2' || e.target.id == 'card3' || e.target.id == 'card4' || e.target.id == 'card5') {
        
        drag_card.addEventListener('mousedown', function(e) {
        document.onmousemove = function (e) {
            moveCard(e);
        }
        drag_card.onmouseup = function () {
            document.onmousemove = null;
            drag_card.onmouseup = null;
            drag_card.removeEventListener('mousedown', function(e){
                //pass
            })
        }
        })
    }
    if (e.target.id == 'pin_ico1' || e.target.id == 'pin_ico2' || e.target.id == 'pin_ico3' || e.target.id == 'pin_ico4' || e.target.id == 'pin_ico5') {
        pin_card();
        return;
    }

})


// Dropmenu dots

function dropMenu() {

    document.addEventListener('click', function(e) {
        var card_menu = document.getElementById(e.target.id);
        if (card_menu.id == 'drop_menu1' || card_menu.id == 'drop_menu2' || card_menu.id == 'drop_menu3' || card_menu.id == 'drop_menu4' || card_menu.id == 'drop_menu5') {
            
            if (card_menu.id == 'drop_menu1') {
                document.getElementById('dropdown1').classList.toggle('show');
            } else if (card_menu.id == 'drop_menu2') {
                document.getElementById('dropdown2').classList.toggle('show');
            } else if (card_menu.id == 'drop_menu3') {
                document.getElementById('dropdown3').classList.toggle('show');
            } else if (card_menu.id == 'drop_menu4') {
                document.getElementById('dropdown4').classList.toggle('show');
            } else if (card_menu.id == 'drop_menu5') {
                document.getElementById('dropdown5').classList.toggle('show');
            } 
            
        }
    })

}

// Delete card in dropmenu

function deleteCard() {

    document.addEventListener('click', function(e) {
        var del_card = document.getElementById(e.target.id);
        if (del_card.id == 'del_card1' || del_card.id == 'del_card2' || del_card.id == 'del_card3' || del_card.id == 'del_card4' || del_card.id == 'del_card5') {

            if (del_card.id == 'del_card1') {
                document.getElementById('card1').remove();
            } else if (del_card.id == 'del_card2') {
                document.getElementById('card2').remove();
            } else if (del_card.id == 'del_card3') {
                document.getElementById('card3').remove();
            } else if (del_card.id == 'del_card4') {
                document.getElementById('card4').remove();
            } else if (del_card.id == 'del_card5') {
                document.getElementById('card5').remove();
            }

        }
    })

}

// Add card button

function addCard() {

    var add_menu = document.getElementById('add_card');
    add_menu.style.visibility = 'visible';
}