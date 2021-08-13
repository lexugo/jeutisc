export default function Hit({ title, reference }) {
    return reference 
        ? <a href={reference}>{ title || reference }</a>
        : <span>{ title }</span>
}