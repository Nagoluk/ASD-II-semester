#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
typedef unsigned long long data_t;
 
inline char simb( data_t val ) {
   return val < 10 ? '0' + val : 'A' + val - 10;
}
 
// только для отладки:
ostream& operator << ( ostream& stream, vector<data_t>& obj ) {
   stream << "{[" <<  obj.size() << "]: ";
   for( vector<data_t>::iterator i = obj.begin(); i != obj.end(); i++ )
      stream << *i << ( i + 1 != obj.end() ? ", " : " " ); 
   return stream << "}";
};
 
int main( int argc, char **argv ) {
   bool debug = argc > 1;
   while( true ) {
      int metr;
      cout << "система счисления (2...)?: ";
      cin >> metr;
      data_t ch, zn;
      cout << "числитель (1...)?: ";
      cin >> ch;
      cout << "знаменатель (" << ch + 1 << "...)?: ";
      cin >> zn;
      if( ch >= zn ) {
         cout << "должнв быть правльная дробь!" << endl;
         continue;
      }
      string sval( "0." );
      vector<data_t> list;
      data_t ost = ch % zn;
      while( true ) {
         data_t ch = ost * metr; 
         ost = ch % zn;
         sval.push_back( simb( ch / zn ) );
         if( debug ) cout << ost << " -> " << list << endl;
         if( 0 == ost ) break;
         vector<data_t>::iterator it = 
            find( list.begin(), list.end(), ost );
         if( it == list.end() ) 
            list.push_back( ost );
         else {
            ost = list.end() - it;
            break; 
         }
      };
      if( ost != 0 ) { // периодическая дробь, ost - период
         string::iterator is = sval.end() - ost;
         sval.insert( is, '(' );
         sval += ")";
      }
      cout << "длина периода " << ost << " : "
           << ch << " / " << zn << " = " << sval << endl;
   }
}