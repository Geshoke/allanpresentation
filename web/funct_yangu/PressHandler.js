document.getElementById('Laterals').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('Laterals', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('Laterals', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('Laterals', 'visibility', 'visible');
    }
});

document.getElementById('mains').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('mains', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('mains', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('mains', 'visibility', 'visible');
    }
});

document.getElementById('airValve').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('airValve', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('airValve', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('airValve', 'visibility', 'visible');
    }
});

document.getElementById('customers').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('customers', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('customers', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('customers', 'visibility', 'visible');
    }
});

document.getElementById('DMA').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('DMA', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('DMA', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('DMA', 'visibility', 'visible');
    }
});

document.getElementById('sub_DMA').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('sub_DMA', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('sub_DMA', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('sub_DMA', 'visibility', 'visible');
    }
});

document.getElementById('boreholes').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('boreholes', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('boreholes', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('boreholes', 'visibility', 'visible');
    }
});

document.getElementById('distb_meters').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('distb_meters', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('distb_meters', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('distb_meters', 'visibility', 'visible');
    }
});

document.getElementById('gateValve').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('gateValve', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('gateValve', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('gateValve', 'visibility', 'visible');
    }
});

document.getElementById('reducer').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('reducer', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('reducer', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('reducer', 'visibility', 'visible');
    }
});

document.getElementById('sluice').addEventListener('click', function (e) {
    // alert('You are already viewing ROTARY areas')
    e.preventDefault();
    e.stopPropagation();
    var itsVisibility = map.getLayoutProperty('sluice', 'visibility')
    // console.log(itsVisibility)//DEBUGING
    if (itsVisibility === 'visible') {
        map.setLayoutProperty('sluice', 'visibility', 'none');
    }
    else {
        map.setLayoutProperty('sluice', 'visibility', 'visible');
    }
});

