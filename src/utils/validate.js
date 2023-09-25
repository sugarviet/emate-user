export const VALIDATOR = {
    VALIDATE_EMAIL : (rule, value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!value || emailRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject("Vui lòng nhập Email hợp lệ");
    },
    VALIDATE_PASSWORD : (rule, value) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/;
        if (!value || passwordRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          "Mật khẩu cần một ký tự viết hoa và một ký tự đặc biệt"
        );
      }
}
