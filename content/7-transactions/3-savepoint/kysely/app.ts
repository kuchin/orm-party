await db.transaction().execute(async (trx) => {
  const order = await trx
    .insertInto('orders')
    .values({ user_id: 1, amount: 100 })
    .returning('id')
    .executeTakeFirstOrThrow()

  try {
    await trx.transaction().execute(async (inner) => {
      await inner
        .insertInto('order_items')
        .values({ order_id: order.id, product_id: 42 })
        .executeTakeFirst()

      throw new Error('item failed')
    })
  } catch {
    // only inner transaction rolled back
  }
})
