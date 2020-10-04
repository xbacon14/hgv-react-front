import React from 'react';

export default function GetCurrentDate(separator = '/') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours()
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date} - ${hour}:${minutes}:${seconds}`
}