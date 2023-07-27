# from flask import Flask, request
# import json
# import requests
#
# from Recommendation_system import recommedation_system
#
# app = Flask(__name__)
#
# @app.route('/receive', methods=['POST'])
# def receive_item():
#     if request.method == 'POST':
#         item = request.json.get('item')  # Lấy item từ yêu cầu POST gửi từ client
#         print('Nhận item là:', item)
#         recommedation_system(item)  # Gọi hàm recommmendation_system để tạo file JSON
#         try:
#             # Đọc dữ liệu từ file JSON
#             with open('Recommended_products/recommended_products.json', 'r') as file:
#                 file_data = file.read()
#
#             # Gửi POST request bằng cách truyền dữ liệu dưới dạng JSON
#             upload_url = 'http://192.168.108.227:5001/receive'
#             response = requests.post(upload_url, json=json.loads(file_data))
#
#             if response.status_code == 200:
#                 print('Gửi file recommended_products sang server_node thành công')
#             else:
#                 print('Gửi file recommended_products sang server_node thất bại')
#         except Exception as e:
#             print('Xảy ra lỗi:', e)
#
#         # Trả về phản hồi cho client
#         return 'successfully'
#
#
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)
# if not recommended_products_list:
    #     product_info = products.loc[products['Product ID'] == item]
    #     if not product_info.empty:
    #         category = product_info['Category'].values[0]
    #         category_product = products.loc[products['Category'] == category]
    #         if len(category_product) > 1:
    #             category_product = category_product[category_product['Product ID'] != item]
    #             category_product = category_product.head(10)
    #             recommended_products_list = []
    #             for _, product in category_product.iterrows():
    #                 recommended_products_list.append({
    #                     "STT": product['STT'],
    #                     "Product ID": product['Product ID'],
    #                     "Category": product['Category']
    #                 })
    #
    # if recommended_products_list is None or len(recommended_products_list) < 10:
    #     # Lấy thêm  quyển sách có rating cao nhất
    #     top_rated_products = get_top_rated_products().head(10 - len(recommended_products_list))
    #     for _, sp in top_rated_products.iterrows():
    #         recommended_products_list.append({
    #             "STT": sp['STT'],
    #             "Product ID": sp['Product ID'],
    #             "Category": sp['Category']
    #         })