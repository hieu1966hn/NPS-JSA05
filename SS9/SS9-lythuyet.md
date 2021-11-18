Async & await:

- callbacks: để làm việc vói các đoạn code bất đồng bộ trong JS (JS là nn bất đồng bộ). Không nên lạm dụng quá.

- Giải pháp ES6: Bổ sung thêm (.then()) Promise.

- Giải pháp ES7: Async/Await được bổ sung để viết code bất đồng bộ trong JS tốt hơn. Code dễ nhìn hơn.

- Khái niêm: Tính năng của JS giúp làm việc với các hàm bất đồng bộ theo cách dễ hiểu hơn.

* Async: Khai báo 1 hàm bất đồng bộ (async function someName(){...})

  - Tự động động biến 1 hàm thông thường -> một Promise.
  - Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kq trong hàm của nó.
  - Async cho phép sử dụng Await.

* Await: tạm dừng việc thực hiện các hàm async. (let result = await someAsyncCall() )
  - KHi được đặt trước một Promise, nó sẽ đợi cho tới khi Promise "someAsyncCall()" kết thúc và trả về kết quả.
  - Await chỉ làm việc với Promise, ko hoạt động với callbacks.
  - Await chỉ có thể được sử dụng bên trong các fucntion async
