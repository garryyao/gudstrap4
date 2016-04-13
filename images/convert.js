#!/usr/bin/env node
'use strict';

require('shelljs/global');
for(let i of [1, 2,3]){
  exec(`convert teacher${i}.png -resize 256x256^ teacher${i}.png`);
}
