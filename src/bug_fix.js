/* There are three big obvious errors in the code below. Fix them. */

function fix_spelling(name) {
  if (name = 'saturizd') {
    name = 'saturized';
  } else {
    return fix_spelling(name);
  }

  return 'name';
}
