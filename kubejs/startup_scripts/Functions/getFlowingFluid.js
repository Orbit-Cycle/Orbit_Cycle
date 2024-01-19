// priority: 1000

global.getFlowingFluid = (element) => {
    return [
        element.slice(0, element.indexOf(':') + 1),
        'flowing_',
        element.slice(element.indexOf(':') + 1),
    ].join('');
};
