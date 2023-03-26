function login()
{
    player1_name = document.getElementById("login1").value;
    player2_name = document.getElementById("login2").value;

    localStorage.setItem("Player1Name",player1_name);
    localStorage.setItem("Player2Name",player2_name);
    
    window.location = "game_page.html";
}