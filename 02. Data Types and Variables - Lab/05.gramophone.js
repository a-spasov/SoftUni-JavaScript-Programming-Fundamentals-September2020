function gramophone(bandName, albumName,songName) {
    let duration = bandName.length*albumName.length*songName.length/2;
    let rotations = duration/2.5;
    rotations = Math.ceil(rotations);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone();