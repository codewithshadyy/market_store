
const pool = require("../config/db");

class OrderRepository {

    
    async createOrder(client, customerId, totalAmount) {

        const query = `
            INSERT INTO orders (customer_id, total_amount)
            VALUES ($1, $2)
            RETURNING *;
        `

        const values = [customerId, totalAmount]

        const result = await client.query(query, values)

        return result.rows[0]
    }


    async addOrderItems(client, orderId, items) {

        const query = `
            INSERT INTO order_items (
                order_id,
                product_id,
                product_name,
                quantity,
                unit_price,
                subtotal
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `

        const insertedItems = []

        for (const item of items) {

            const values = [
                orderId,
                item.productId,
                item.productName,
                item.quantity,
                item.unitPrice,
                item.subtotal
            ]

            const result = await client.query(query, values);

            insertedItems.push(result.rows[0])
        }

        return insertedItems
    }

    
    async findOrderById(orderId) {

        const query = `
            SELECT
                o.*,
                COALESCE(
                    json_agg(
                        json_build_object(
                            'id', oi.id,
                            'productId', oi.product_id,
                            'productName', oi.product_name,
                            'quantity', oi.quantity,
                            'unitPrice', oi.unit_price,
                            'subtotal', oi.subtotal
                        )
                    ) FILTER (WHERE oi.id IS NOT NULL),
                    '[]'
                ) AS items

            FROM orders o

            LEFT JOIN order_items oi
                ON o.id = oi.order_id

            WHERE o.id = $1

            GROUP BY o.id;
        `

        const result = await pool.query(query, [orderId])

        return result.rows[0] || null
    }

    async findOrdersByCustomer(customerId) {

        const query = `
            SELECT *
            FROM orders
            WHERE customer_id = $1
            ORDER BY created_at DESC;
        `

        const result = await pool.query(query, [customerId]);

        return result.rows
    }

}

module.exports = new OrderRepository();