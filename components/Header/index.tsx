import styles from './Header.module.css'
import NavigationMenu from '../NavigationMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Lucas Neves</h2>
      <NavigationMenu />
    </header>
  );
}
