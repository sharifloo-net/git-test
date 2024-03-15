console.log('Hello JS!');

const isLogin = (bool) => {
    if (bool) return true;
    return false;
};
const test = () => false;
const register = user => {
    user.name = 'amin';
    user.age = 23;
    if (user.name == 'amin')
        return true;
    else return false;
}
