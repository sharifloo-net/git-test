const getMe = (user) => {
    return user.name;
};

const userAuth = (user) => {
    if (user.name == 'amin' && user.password == '1234') {
        return true;
    } else return false;
};
