export default function concatRefs(references) {
  let refString = '';
  references.forEach((ref, index) => refString += `${ref.site_name}${index < references.length - 1 ? ', ' : ''}`)
  return refString;
}