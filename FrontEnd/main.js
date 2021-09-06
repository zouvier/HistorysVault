// key for initializing server. 
//TODO: change during production
Moralis.initialize('Izr6Zce1IB7ptfLuLMD8h57idTAMcRW4OfK1zCp4');
Moralis.serverURL = 'https://92cgorxrw6xn.bigmoralis.com:2053/server'
//@dev: authenticates the user and asks them to login with metamask, and also logout
const user = async() => await Moralis.User.current()
const userLogOut = async () => await Moralis.User.logOut();

//@dev: helper function to hide/show elements
hideElement = (element) => element.style.display = 'none';
showElement = (element) => element.style.display = 'block';

//@dev: this step enables moralis, allows us to use it through the window
//@use: will render on page load
const init = async () => {
    hideElement(userInfo);
    hideElement(userProfileButton);
    window.web3 = await Moralis.Web3.authenticate();
    initUser();
    
}

const initUser = async () => {
    if(user)
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

const logout = async () => {
    userLogOut();
    hideElement(userInfo);
    initUser;
}

const login = async () => {
    try{
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch(error){
        alert('Connect your metamask wallet!');
    }
}


const openUserInfo = async () => {
    if(user()){
        showElement(userInfo)
    }
    else
    {
        login();
    }
}



const userConnectButton = document.getElementById('btn_connect');
userConnectButton.onclick = login();


const userProfileButton = document.getElementById('btn_user_info');
userProfileButton.onclick = openUserInfo;


const userInfo = document.getElementById('userInfo');
document.getElementById('btn_closeUserInfo').onclick = () => hideElement(userInfo);
document.getElementById('btn_logout').onclick = () => logout();

init();