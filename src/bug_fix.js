/* There are three big obvious errors in the code below. Fix them. */

function fix_spelling(name) {
  // if (name = 'saturizd') // with single equality sign we asign the value...
  if (name === 'saturizd') {
    name = 'saturized';
  } else {
    return name;
    // return fix_spelling(name); //  if name is not 'saturizd', there will be infinite recursion calls
  }
  return name;
  // return 'name'; // it return string 'name', not variable name... so it's return always same value - 'name'...  
}
