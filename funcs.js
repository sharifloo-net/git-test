const getMe = (user) => {
    return user.name;
};

const userAuth = (user) => {
    if (user.username == 'amin' && user.password == '1234') return true;
    return false;
};
userAuth({ username: 'amin', password: '1234' });
