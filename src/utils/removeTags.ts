// Remove tags html de uma string
// Exemplo: removeTags('<p>Lorem ipsum.</p>',['p'])
export function removeTags(input: string, tagsToRemove: string[]): string {
  const tagsPattern = tagsToRemove.map((tag) => `<${tag}[^>]*>|</${tag}>`).join('|')
  const regex = new RegExp(tagsPattern, 'gi')

  return input.replace(regex, '')
}
