// key for initializing server. 
//TODO: change during production
Moralis.initialize('Izr6Zce1IB7ptfLuLMD8h57idTAMcRW4OfK1zCp4');
Moralis.serverURL = 'https://92cgorxrw6xn.bigmoralis.com:2053/server'

//@dev: this step enables moralis, allows us to use it through the window
//@use: will render on page load
init = async () => {
    window.web3 = await Moralis.Web3.enable();
    initUser();
}

initUser = async () => {
    if(await Moralis.User.current())
    {
        showElement(userProfileButton);
        hideElement(userConnectButton);
    }
    else
    {
        hideElement(userProfileButton);
        showElement(userConnectButton);
    }
}


login = async () => {
    try{
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch(error){
        alert('Connect your metamask wallet!');
    }
}

//@dev: helper function to hide/show elements
hideElement = (element) => element.style.display = 'none';
showElement = (element) => element.style.display = 'block';

const userConnectButton = document.getElementById('btn_connect');
userConnectButton.onclick = login;
const userProfileButton = document.getElementById('btn_user_info');

init();