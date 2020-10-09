function returnList () {
    const name = 'Alfred';

    function newFunctionToBeReturned () {
        return (2 + 5);
    };

    return [name, newFunctionToBeReturned()];
};

console.log (returnList());