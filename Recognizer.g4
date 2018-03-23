grammar Recognizer;

parse
 : if_stat EOF
 ;

if_stat
 : IF if_block ELSE stat_block
 ;

if_block
 : condition_block stat_block
 ;

condition_block
 : OPAR condition CPAR 
 ;

stat_block
 : OBRACE stat_block CBRACE
 | if_stat 
 | RETURN MINUS? FLOAT SCOL
 ;

condition
 : RETRYID LTEQ MINUS? FLOAT
 | equals_condition
 ;

equals_condition
 : RETRYID DOT EQUALS OPAR STRING CPAR
 | equals_condition OR equals_condition
 ;

OR : '||';
LTEQ : '<=';
MINUS : '-';
EQUALS : 'Equals';

DOT : '.';
SCOL : ';';
OPAR : '(';
CPAR : ')';
OBRACE : '{';
CBRACE : '}';

IF : 'if';
ELSE : 'else';
RETURN : 'return';

RETRYID
 : 'c' DOT ID
 ;

ID
 : [a-zA-Z_] [a-zA-Z_0-9]*
 ;

FLOAT
 : [0-9]+ '.' [0-9]* 'E7'? 
 | '.' [0-9]+
 ;

STRING
 : '"' (~["\r\n] | '""')* '"'
 ;

SPACE
 : [ \t\r\n] -> skip
 ;