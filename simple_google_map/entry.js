import { initialize, codeAddress } from './map.js';

document.addEventListener('DOMContentLoaded', initialize);

var encode = document.getElementById('encode');
encode.addEventListener('click', codeAddress);
