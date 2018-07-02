export function roundTo1Decimal(number){
  return Math.round(number * 10) / 10.0
}

export function referencesToString(references){
  return references.map((ref) => ref.site_name).join(', ');
}