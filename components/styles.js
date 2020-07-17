import {queryFromCode} from './utils';

let colWidth = 100 / 12;

const styles = staticStyle = [
  {
    query: queryFromCode('xs'),
    style: {
        row: {
            flexDirection:'row', 
            flexWrap:'wrap',
            marginRight: -5,
        },
        col_1: {
            width: (colWidth*1)+'%',
            paddingRight: 5,
        },
        col_2: {
            width: (colWidth*2)+'%',
            paddingRight: 5,
        },
        col_3: {
            width: (colWidth*3)+'%',
            paddingRight: 5,
        },
        col_4: {
            width: (colWidth * 4)+'%',
            paddingRight: 5,
        },
        col_5: {
            width: (colWidth*5)+'%',
            paddingRight: 5,
        },
        col_6: {
            width: colWidth * 6+'%',
            paddingRight: 5,
        },
        col_7: {
            width: (colWidth*7)+'%',
            paddingRight: 5,
        },
        col_8: {
            width: (colWidth*8)+'%',
            paddingRight: 5,
        },
        col_9: {
            width: (colWidth*9)+'%',
            paddingRight: 5,
        },
        col_10: {
            width: (colWidth*10)+'%',
            paddingRight: 5,
        },
        col_11: {
            width: (colWidth*11)+'%',
            paddingRight: 5,
        },
        col_12: {
            width: (colWidth*12)+'%',
            paddingRight: 5,
        }
    }
  },
  {
    query: queryFromCode('sm'),
    style: {
        row: {
            flexDirection:'row',
            flexWrap:'wrap',
            marginRight: -6,
        },
        col_1: {
            width: (colWidth*1)+'%',
            paddingRight: 6,
        },
        col_2: {
            width: (colWidth*2)+'%',
            paddingRight: 6,
        },
        col_3: {
            width: (colWidth*3)+'%',
            paddingRight: 6,
        },
        col_4: {
            width: (colWidth * 4)+'%',
            paddingRight: 6,
        },
        col_5: {
            width: (colWidth*5)+'%',
            paddingRight: 6,
        },
        col_6: {
            width: colWidth * 6+'%',
            paddingRight: 6,
        },
        col_7: {
            width: (colWidth*7)+'%',
            paddingRight: 6,
        },
        col_8: {
            width: (colWidth*8)+'%',
            paddingRight: 6,
        },
        col_9: {
            width: (colWidth*9)+'%',
            paddingRight: 6,
        },
        col_10: {
            width: (colWidth*10)+'%',
            paddingRight: 6,
        },
        col_11: {
            width: (colWidth*11)+'%',
            paddingRight: 6,
        },
        col_12: {
            width: (colWidth*12)+'%',
            paddingRight: 6,
        },
      
    }
  },
  {
    query: queryFromCode('md'),
    style: {

        row: {
            flexDirection:'row',
            flexWrap:'wrap',
            marginRight: -7,
        },
        col_1: {
            width: (colWidth*1)+'%',
            paddingRight: 7,
        },
        col_2: {
            width: (colWidth*2)+'%',
            paddingRight: 7,
        },
        col_3: {
            width: (colWidth * 3)+'%',
            paddingRight: 7,
        },
        col_4: {
            width: (colWidth * 4)+'%',
            paddingRight: 7,
        },
        col_5: {
            width: (colWidth*5)+'%',
            paddingRight: 7,
        },
        col_6: {
            width: colWidth * 6+'%',
            paddingRight: 7,
        },
        col_7: {
            width: (colWidth*7)+'%',
            paddingRight: 7,
        },
        col_8: {
            width: (colWidth*8)+'%',
            paddingRight: 7,
        },
        col_9: {
            width: (colWidth*9)+'%',
            paddingRight: 7,
        },
        col_10: {
            width: (colWidth*10)+'%',
            paddingRight: 7,
        },
        col_11: {
            width: (colWidth*11)+'%',
            paddingRight: 7,
        },
        col_12: {
            width: (colWidth*12)+'%',
            paddingRight: 7,
        },
    }
  },
  {
    query: queryFromCode('lg'),
    style: {
        
        row: {
            flexDirection:'row',
            flexWrap:'wrap',
            marginRight:-8,
        },
        col_1: {
            width: (colWidth*1)+'%',
            paddingRight: 8,
        },
        col_2: {
            width: (colWidth*2)+'%',
            paddingRight: 8,
        },
        col_3: {
            width: (colWidth*3)+'%',
            paddingRight: 8,
        },
        col_4: {
            width: (colWidth*4)+'%',
            paddingRight: 8,
        },
        col_5: {
            width: (colWidth*5)+'%',
            paddingRight: 8,
        },
        col_6: {
            width: colWidth * 6+'%',
            paddingRight: 8,
        },
        col_7: {
            width: (colWidth*7)+'%',
            paddingRight: 8,
        },
        col_8: {
            width: (colWidth*8)+'%',
            paddingRight: 8,
        },
        col_9: {
            width: (colWidth*9)+'%',
            paddingRight: 8,
        },
        col_10: {
            width: (colWidth*10)+'%',
            paddingRight: 8,
        },
        col_11: {
            width: (colWidth*11)+'%',
            paddingRight: 8,
        },
        col_12: {
            width: (colWidth*12)+'%',
            paddingRight: 8,
        },
    }
  }
]
export default styles;
