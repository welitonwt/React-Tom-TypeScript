import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  src?: string;
  alt?: string;
  className?: string;
}

export function Avatar({hasBorder = true, src}: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarHasborder : styles.avatar} 
      src={src}
    />
  ) 
}