module.exports = function main(inputs) {
    distance = inputs['distance'];
    parkTIme=  inputs['parkTime'];

    if (distance <= 2) {
        return Math.round(6 + parkTIme * 0.25);
    }
};
