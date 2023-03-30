import style from './style.module.css'

export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <svg className={style.invert} width="24" height="28" viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.7395 0C5.538 0.02625 3.92625 -0.0525 2.61025 0.67375C1.92883 1.06246 1.40872 1.68186 1.14375 2.42025C0.855 3.1885 0.75 4.10025 0.75 5.25V22.75C0.75 23.9015 0.855 24.8132 1.14375 25.5797C1.43075 26.348 1.9505 26.9622 2.61025 27.3262C3.92625 28.0542 5.538 27.9738 7.7395 28H16.5105C18.712 27.9755 20.3237 28.0525 21.6415 27.3262C22.3229 26.9375 22.843 26.3181 23.108 25.5797C23.395 24.8132 23.5 23.8998 23.5 22.75V5.25C23.5 4.0985 23.395 3.1885 23.1062 2.42025C22.8417 1.68214 22.3223 1.06278 21.6415 0.67375C20.3237 -0.0525 18.712 0.02625 16.5105 0H7.7465H7.7395ZM7.75 1.75H16.5C18.7032 1.77625 20.1523 1.855 20.7928 2.2085C21.1148 2.38525 21.3003 2.58125 21.47 3.0345C21.6398 3.4895 21.75 4.214 21.75 5.25V22.75C21.75 23.786 21.6398 24.5105 21.47 24.9655C21.2985 25.4205 21.1148 25.6147 20.7928 25.7915C20.1523 26.145 18.7032 26.2238 16.5 26.25H7.75C5.5485 26.2238 4.0925 26.145 3.45375 25.7915C3.1335 25.6165 2.9515 25.4205 2.78 24.9655C2.61025 24.5105 2.5 23.786 2.5 22.75V5.25C2.5 4.214 2.61025 3.4895 2.78 3.0345C2.9515 2.5795 3.1335 2.38525 3.45375 2.2085C4.0925 1.855 5.545 1.77625 7.75 1.75Z" />
                <path d="M12.6413 8.77104C10.7355 8.64317 8.84848 9.21432 7.3335 10.3775C5.81899 11.5414 4.77841 13.2155 4.40506 15.0887C4.0317 16.9619 4.35095 18.907 5.3035 20.5625C6.26082 22.2154 7.7853 23.4648 9.594 24.0789C11.4027 24.6929 13.3727 24.6299 15.1385 23.9015C16.903 23.1684 18.3417 21.82 19.1874 20.1066C20.0332 18.3932 20.2286 16.4311 19.7375 14.5845L19.5083 13.741L17.816 14.196L18.0435 15.0395C18.4301 16.4749 18.2806 18.002 17.6229 19.3352C16.9652 20.6683 15.8443 21.7162 14.47 22.2828C13.0974 22.8541 11.5637 22.9057 10.1558 22.4281C8.74793 21.9504 7.5623 20.9761 6.82075 19.6875C6.11358 18.4678 5.84969 17.0411 6.07377 15.649C6.29784 14.257 6.99612 12.9852 8.05035 12.0489C9.10459 11.1127 10.45 10.5695 11.8587 10.5115C13.2675 10.4534 14.653 10.884 15.7808 11.7303L14.6538 12.859L15.891 14.0963L17.074 12.9133H17.0775L17.697 12.292L18.3148 11.676L17.697 11.0583C16.3456 9.70691 14.5484 8.89384 12.6413 8.77104Z" />
                <path d="M12.125 14C11.4288 14 10.7611 14.2766 10.2688 14.7688C9.77656 15.2611 9.5 15.9288 9.5 16.625C9.5 17.3212 9.77656 17.9889 10.2688 18.4812C10.7611 18.9734 11.4288 19.25 12.125 19.25C12.8212 19.25 13.4889 18.9734 13.9812 18.4812C14.4734 17.9889 14.75 17.3212 14.75 16.625C14.75 15.9288 14.4734 15.2611 13.9812 14.7688C13.4889 14.2766 12.8212 14 12.125 14ZM12.125 15.75C12.3571 15.75 12.5796 15.8422 12.7437 16.0063C12.9078 16.1704 13 16.3929 13 16.625C13 16.8571 12.9078 17.0796 12.7437 17.2437C12.5796 17.4078 12.3571 17.5 12.125 17.5C11.8929 17.5 11.6704 17.4078 11.5063 17.2437C11.3422 17.0796 11.25 16.8571 11.25 16.625C11.25 16.3929 11.3422 16.1704 11.5063 16.0063C11.6704 15.8422 11.8929 15.75 12.125 15.75Z" />
            </svg>

            <svg className={style.invert} width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 14C19 15.3261 18.4732 16.5979 17.5355 17.5355C16.5979 18.4732 15.3261 19 14 19C12.6739 19 11.4021 18.4732 10.4645 17.5355C9.52678 16.5979 9 15.3261 9 14C9 12.6739 9.52678 11.4021 10.4645 10.4645C11.4021 9.52678 12.6739 9 14 9C15.3261 9 16.5979 9.52678 17.5355 10.4645C18.4732 11.4021 19 12.6739 19 14ZM17.125 14C17.125 14.8288 16.7958 15.6237 16.2097 16.2097C15.6237 16.7958 14.8288 17.125 14 17.125C13.1712 17.125 12.3763 16.7958 11.7903 16.2097C11.2042 15.6237 10.875 14.8288 10.875 14C10.875 13.1712 11.2042 12.3763 11.7903 11.7903C12.3763 11.2042 13.1712 10.875 14 10.875C14.8288 10.875 15.6237 11.2042 16.2097 11.7903C16.7958 12.3763 17.125 13.1712 17.125 14Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14 0.250003C13.665 0.250003 13.3325 0.262503 13.0038 0.285003C12.05 0.353753 11.3225 1.05625 11.1138 1.915L10.6738 3.7275C10.6488 3.825 10.5613 3.9425 10.3925 4.0025C10.0835 4.11452 9.77982 4.24091 9.48254 4.38125C9.32004 4.45625 9.17504 4.43625 9.08879 4.38375L7.49629 3.41375C6.74129 2.95375 5.73129 2.97125 5.00879 3.5975C4.50504 4.0325 4.03379 4.505 3.59754 5.0075C2.97254 5.73125 2.95379 6.74125 3.41379 7.495L4.38379 9.08875C4.43629 9.175 4.45754 9.32 4.38129 9.4825C4.24129 9.77875 4.11504 10.0825 4.00379 10.3925C3.94129 10.5613 3.82504 10.65 3.72754 10.6738L1.91504 11.1138C1.05629 11.3225 0.353794 12.05 0.285044 13.0038C0.237505 13.6671 0.237505 14.3329 0.285044 14.9963C0.353794 15.95 1.05629 16.6775 1.91504 16.8863L3.72754 17.3263C3.82504 17.3513 3.94254 17.4388 4.00254 17.6075C4.11504 17.9175 4.24129 18.2213 4.38129 18.5188C4.45629 18.68 4.43629 18.825 4.38379 18.9113L3.41379 20.5038C2.95379 21.2588 2.97129 22.2688 3.59754 22.9913C4.03254 23.495 4.50504 23.9663 5.00754 24.4025C5.73129 25.0275 6.74129 25.0463 7.49504 24.5863L9.08879 23.6163C9.17504 23.5638 9.32004 23.5425 9.48254 23.6188C9.77879 23.7588 10.0825 23.885 10.3925 23.9963C10.5613 24.0588 10.65 24.175 10.6738 24.2725L11.1138 26.085C11.3225 26.9438 12.05 27.6463 13.0038 27.7138C13.6671 27.7614 14.333 27.7614 14.9963 27.7138C15.95 27.6463 16.6775 26.9438 16.8863 26.085L17.3263 24.2725C17.3513 24.175 17.4388 24.0575 17.6075 23.9975C17.9175 23.885 18.2213 23.7588 18.5188 23.6188C18.68 23.5438 18.825 23.5638 18.9113 23.6163L20.5038 24.5863C21.2588 25.0463 22.2688 25.0288 22.9913 24.4025C23.495 23.9675 23.9663 23.495 24.4025 22.9925C25.0275 22.2688 25.0463 21.2588 24.5863 20.505L23.6163 18.9113C23.5638 18.825 23.5425 18.68 23.6188 18.5175C23.7588 18.2213 23.885 17.9175 23.9963 17.6075C24.0588 17.4388 24.175 17.35 24.2725 17.3263L26.085 16.8863C26.9438 16.6775 27.6463 15.95 27.7138 14.9963C27.7614 14.3329 27.7614 13.6671 27.7138 13.0038C27.6463 12.05 26.9438 11.3225 26.085 11.1138L24.2725 10.6738C24.175 10.6488 24.0575 10.5613 23.9975 10.3925C23.8855 10.0835 23.7591 9.77979 23.6188 9.4825C23.5438 9.32 23.5638 9.175 23.6163 9.08875L24.5863 7.49625C25.0463 6.74125 25.0288 5.73125 24.4025 5.00875C23.9675 4.505 23.495 4.03375 22.9925 3.5975C22.2688 2.9725 21.2588 2.95375 20.505 3.41375L18.9113 4.38375C18.825 4.43625 18.68 4.4575 18.5175 4.38125C18.2202 4.24136 17.9166 4.11539 17.6075 4.00375C17.4388 3.94125 17.35 3.825 17.3263 3.7275L16.8863 1.915C16.6775 1.05625 15.95 0.353753 14.9963 0.285003C14.6647 0.261459 14.3324 0.249785 14 0.250003ZM13.1375 2.15625C13.7118 2.11508 14.2883 2.11508 14.8625 2.15625C14.9313 2.16125 15.0313 2.21875 15.065 2.35625L15.5038 4.16875C15.695 4.95375 16.2863 5.51875 16.97 5.76625C17.2263 5.85875 17.4763 5.9625 17.72 6.0775C18.0607 6.24224 18.4368 6.32002 18.8148 6.30388C19.1928 6.28774 19.561 6.17818 19.8863 5.985L21.48 5.015C21.6013 4.94 21.7125 4.97 21.765 5.015C22.2 5.3925 22.6075 5.8 22.985 6.235C23.03 6.2875 23.06 6.3975 22.985 6.52L22.015 8.1125C21.8217 8.43799 21.712 8.80634 21.6958 9.1846C21.6797 9.56286 21.7576 9.93923 21.9225 10.28C22.0375 10.5238 22.1413 10.7738 22.2325 11.03C22.48 11.7138 23.0475 12.305 23.83 12.495L25.6425 12.9363C25.7813 12.9688 25.8388 13.0688 25.8438 13.1375C25.8849 13.7118 25.8849 14.2882 25.8438 14.8625C25.8388 14.9313 25.7813 15.0313 25.6438 15.065L23.8313 15.5038C23.4647 15.5972 23.1269 15.7801 22.8481 16.0359C22.5694 16.2918 22.3583 16.6127 22.2338 16.97C22.1414 17.2248 22.0371 17.475 21.9213 17.72C21.7567 18.0607 21.6792 18.4369 21.6955 18.8149C21.7119 19.1929 21.8217 19.561 22.015 19.8863L22.985 21.48C23.06 21.6013 23.03 21.7125 22.985 21.765C22.6083 22.2005 22.2006 22.6083 21.765 22.985C21.7125 23.03 21.6025 23.06 21.48 22.985L19.8863 22.015C19.561 21.8218 19.1928 21.7123 18.8148 21.6961C18.4368 21.68 18.0607 21.7578 17.72 21.9225C17.475 22.0375 17.2248 22.141 16.97 22.2325C16.613 22.3572 16.2923 22.5683 16.0367 22.8471C15.7811 23.1258 15.5984 23.4635 15.505 23.83L15.0638 25.6425C15.0313 25.7813 14.9313 25.8388 14.8625 25.8438C14.2883 25.8849 13.7118 25.8849 13.1375 25.8438C13.0688 25.8388 12.9688 25.7813 12.935 25.6438L12.4963 23.8313C12.4028 23.4646 12.22 23.1268 11.9641 22.8481C11.7083 22.5693 11.3873 22.3583 11.03 22.2338C10.7753 22.1414 10.525 22.0371 10.28 21.9213C9.93916 21.7565 9.56275 21.6788 9.18449 21.6952C8.80623 21.7115 8.43792 21.8214 8.11254 22.015L6.52004 22.985C6.39879 23.06 6.28754 23.03 6.23504 22.985C5.79951 22.6083 5.39178 22.2005 5.01504 21.765C4.97004 21.7125 4.94004 21.6025 5.01504 21.48L5.98504 19.8863C6.17822 19.5609 6.28778 19.1928 6.30392 18.8148C6.32006 18.4368 6.24228 18.0606 6.07754 17.72C5.96216 17.475 5.85829 17.2247 5.76629 16.97C5.64173 16.6131 5.43079 16.2925 5.15227 16.0369C4.87376 15.7813 4.53632 15.5986 4.17004 15.505L2.35754 15.0638C2.21879 15.0313 2.16129 14.9313 2.15629 14.8625C2.11512 14.2882 2.11512 13.7118 2.15629 13.1375C2.16129 13.0688 2.21879 12.9688 2.35629 12.935L4.16879 12.4963C4.53544 12.4028 4.87322 12.2199 5.15197 11.9641C5.43073 11.7082 5.64179 11.3873 5.76629 11.03C5.8583 10.7753 5.96216 10.525 6.07754 10.28C6.2425 9.93923 6.3204 9.56286 6.30425 9.1846C6.28811 8.80634 6.17844 8.43799 5.98504 8.1125L5.01504 6.52C4.94004 6.39875 4.97004 6.2875 5.01504 6.235C5.39254 5.8 5.80004 5.3925 6.23504 5.015C6.28754 4.97 6.39754 4.94 6.52004 5.015L8.11254 5.985C8.43803 6.1784 8.80638 6.28807 9.18464 6.30421C9.5629 6.32036 9.93927 6.24246 10.28 6.0775C10.5251 5.96212 10.7753 5.85826 11.03 5.76625C11.387 5.64169 11.7075 5.43075 11.9631 5.15223C12.2188 4.87371 12.4015 4.53628 12.495 4.17L12.9363 2.3575C12.9688 2.21875 13.0688 2.16125 13.1375 2.15625Z" />
            </svg>

            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="var(--color-secondary)" d="M9.375 13.875H17.625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path stroke="var(--color-secondary)" d="M1.125 4.9375C1.125 4.29859 1.125 3.97915 1.17784 3.7135C1.39483 2.6226 2.2476 1.76983 3.3385 1.55284C3.60415 1.5 3.92359 1.5 4.5625 1.5H13.5H22.4375C23.0765 1.5 23.3959 1.5 23.6615 1.55284C24.7524 1.76983 25.6052 2.6226 25.8222 3.7135C25.875 3.97915 25.875 4.29859 25.875 4.9375C25.875 5.57641 25.875 5.89585 25.8222 6.1615C25.6052 7.25239 24.7524 8.10517 23.6615 8.32216C23.3959 8.375 23.0765 8.375 22.4375 8.375H13.5H4.5625C3.92359 8.375 3.60415 8.375 3.3385 8.32216C2.2476 8.10517 1.39483 7.25239 1.17784 6.1615C1.125 5.89585 1.125 5.57641 1.125 4.9375Z" strokeWidth="2" strokeLinejoin="round"/>
                <path stroke="var(--color-secondary)" d="M2.5 8.375V17.9999C2.5 20.5927 2.5 21.889 3.30546 22.6945C4.11091 23.4999 5.40727 23.4999 8 23.4999H9.375H17.625H19C21.5927 23.4999 22.889 23.4999 23.6945 22.6945C24.5 21.889 24.5 20.5927 24.5 17.9999V8.375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}