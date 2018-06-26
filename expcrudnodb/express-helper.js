
var performValidations = {

    validateUser: function (array, obj) {
        for (i = 0; i < array.length; i++) {
            if (array[i]['id'] === obj.id) {
                return false;
            }
        }
        return true;
    },
    testing: function () {
        console.log('Hi expess helper testing')
    },

    findUserByKey: function (array, key, value, find_update) {
        console.log('value' + find_update)
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                if (find_update == false) {
                    return array[i];
                } else {
                    array[i]['age'] = 26;
                    array[i]['designation'] = 'Q.A.';
                    return array[i];
                }
            }
        }
        return null;
    },

    deleteUser: function (array, userId) {
        var removeIndex = array.map(function (user) { return user.id; }).indexOf(userId);
        console.log('index' + removeIndex)
        return array.splice(removeIndex, 1);
    }
}

module.exports = performValidations;