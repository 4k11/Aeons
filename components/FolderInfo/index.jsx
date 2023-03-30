import style from './style.module.css'

export default function FolderInfo({ file }) {
    return (
        <div className={style.folderInfo}>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 2.99992V11.9999C0.5 12.9333 0.5 13.3998 0.681658 13.7563C0.841442 14.0698 1.09623 14.3253 1.40983 14.4851C1.766 14.6666 2.23249 14.6666 3.16409 14.6666H12.8359C13.7675 14.6666 14.2333 14.6666 14.5895 14.4851C14.9031 14.3253 15.1587 14.07 15.3185 13.7564C15.5002 13.3999 15.5002 12.9332 15.5002 11.9998V5.6664C15.5002 4.73298 15.5002 4.26627 15.3185 3.90975C15.1587 3.59614 14.9032 3.34136 14.5897 3.18158C14.2332 2.99992 13.7667 2.99992 12.8333 2.99992H8M0.5 2.99992H8M0.5 2.99992C0.5 2.07944 1.24619 1.33325 2.16667 1.33325H5.22877C5.63642 1.33325 5.84072 1.33325 6.03253 1.3793C6.20259 1.42013 6.36492 1.48764 6.514 1.57902C6.68217 1.68206 6.8265 1.82644 7.11458 2.1145L8 2.99992" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <span>{file.name}</span>
        </div>
    )
}