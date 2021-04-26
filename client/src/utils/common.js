export const CommonUtils = {
    dateFormat: (date, seperator) => {
        let result = ''; // 결과
        
        // moment.js = dateFormat 을 지원해줌.
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

        // seperator = 구분자 '/', ',' , ...
        if(seperator !== undefined) {
            result = `${year}${seperator}${month}${seperator}${day}`;
        } else {
            result = `${year}/${month}/${day}`;
        }
        //yyyy/MM/dd
        return result
    },

}
