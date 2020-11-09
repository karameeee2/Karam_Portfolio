export const CommonUtils = {
    dateFormat: (date) => {
        let result = ''; // 결과
        
        // moment.js = dateFormat 을 지원해줌.
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

        result = `${year}.${month}.${day}`;
        return result
    },

    
}
