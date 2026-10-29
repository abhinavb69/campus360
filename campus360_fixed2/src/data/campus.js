export const building = {
  id: 'mg-block',
  name: 'Mahatma Gandhi Block',
  shortName: 'MG BLOCK',
  university: 'VIT-AP UNIVERSITY',
  status: 'Prototype Available'
};

export const floor = {
  id: 'floor-1',
  name: 'Floor 1',
  label: 'FLOOR 1',
  available: true
};

const panorama = '/panoramas/sample-360.jpg';

export const viewpoints = {
  P1: { id:'P1', label:'P1 · START', panorama, next:'P2', previous:null, rooms:[] },
  P2: { id:'P2', label:'P2 · SOUTH CORRIDOR', panorama, next:'P3', previous:'P1', rooms:[] },
  P3: { id:'P3', label:'P3 · CENTRAL CORRIDOR', panorama, next:'P4', previous:'P2', rooms:[] },
  P4: { id:'P4', label:'P4 · NORTH TURN', panorama, next:'P5', previous:'P3', rooms:['101'] },
  P5: { id:'P5', label:'P5 · END', panorama, next:null, previous:'P4', rooms:['102'] }
};

export const rooms = {
  '101': { id:'101', name:'Room 101', panorama, entryViewpoint:'P4' },
  '102': { id:'102', name:'Room 102', panorama, entryViewpoint:'P5' }
};

export const floorMap = {
  width: 1000,
  height: 620,
  corridorPath: [
    {x:130,y:500},{x:300,y:500},{x:500,y:500},{x:700,y:500},
    {x:700,y:380},{x:700,y:260},{x:700,y:150},{x:560,y:150},{x:390,y:150}
  ],
  viewpoints: [
    {id:'P1',x:130,y:500,label:'P1 · START'},
    {id:'P2',x:300,y:500,label:'P2 · SOUTH CORRIDOR'},
    {id:'P3',x:500,y:500,label:'P3 · CENTRAL CORRIDOR'},
    {id:'P4',x:700,y:260,label:'P4 · NORTH TURN'},
    {id:'P5',x:390,y:150,label:'P5 · END'}
  ],
  rooms: [
    {id:'101',label:'101',x:790,y:290,entryViewpoint:'P4'},
    {id:'102',label:'102',x:390,y:70,entryViewpoint:'P5'}
  ],
  stairs: [{id:'ST1',label:'STAIRCASE',x:850,y:500}],
  start:{x:80,y:500,label:'START'},
  end:{x:300,y:150,label:'END'}
};
