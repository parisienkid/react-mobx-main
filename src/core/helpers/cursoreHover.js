import styles from '../../components/cursor/cursor.module.scss'

const cursorHoverOn = () => {
    document.querySelector('#cursor').classList.add(styles.cursor_active)
}

const cursorHoverOff = () => {
    document.querySelector('#cursor').classList.remove(styles.cursor_active)
}

export { cursorHoverOff, cursorHoverOn }
