Category.destroy_all
Expense.destroy_all

puts "Seeding baby..."

# cat_type options: Necessary, Fun, Savings
c1 = Category.create(category_name: "Bills", cat_type: "Necessary")
c2 = Category.create(category_name: "Housing", cat_type: "Necessary")
c3 = Category.create(category_name: "Groceries", cat_type: "Necessary")
c4 = Category.create(category_name: "Investment", cat_type: "Savings")
c5 = Category.create(category_name: "Deposit", cat_type: "Savings")
c6 = Category.create(category_name: "Travel", cat_type: "Fun")
c7 = Category.create(category_name: "Dining", cat_type: "Fun")
c8 = Category.create(category_name: "Streaming Service", cat_type: "Fun")
c9 = Category.create(category_name: "Entertainment", cat_type: "Fun")
c10 = Category.create(category_name: "Undefined", cat_type: "Undefined" )




Expense.create(item: "Cell Phone Bill", cost: 50.00, date_of_expense: "01/01/01", user_id: 1, category_id: test.id )
Expense.create(item: "Internet Bill", cost: 30.00, date_of_expense: "01/01/01", user_id: 1, category_id: c1.id )
Expense.create(item: "Electric Bill", cost: 70.00, date_of_expense: "01/01/01", user_id: 1, category_id: c1.id )
Expense.create(item: "Rent", cost: 1500.00, date_of_expense: "01/01/01", user_id: 1, category_id: c2.id )
Expense.create(item: "Groceries", cost: 150.00, date_of_expense: "01/01/01", user_id: 1, category_id: c3.id )
Expense.create(item: "Groceries", cost: 130.00, date_of_expense: "01/01/01", user_id: 1, category_id: c3.id )
Expense.create(item: "IRA Contribution", cost: 200.00, date_of_expense: "01/01/01", user_id: 1, category_id: c4.id )
Expense.create(item: "Savings Account Deposit", cost: 300.00, date_of_expense: "01/01/01", user_id: 1, category_id: c5.id )
Expense.create(item: "Roth IRA Contribution", cost: 150.00, date_of_expense: "01/01/01", user_id: 1, category_id: c4.id )
Expense.create(item: "Savings Account Deposit", cost: 400.00, date_of_expense: "01/01/01", user_id: 1, category_id: c5.id )
Expense.create(item: "Savings Account Deposit", cost: 200.00, date_of_expense: "01/01/01", user_id: 1, category_id: c5.id )
Expense.create(item: "Disney World Trip", cost: 700.00, date_of_expense: "01/01/01", user_id: 1, category_id: c6.id )
Expense.create(item: "Movie Tickets", cost: 20.00, date_of_expense: "01/01/01", user_id: 1, category_id: c9.id )
Expense.create(item: "Fyre Fest 2017", cost: 200.00, date_of_expense: "01/01/01", user_id: 1, category_id: c6.id )
Expense.create(item: "McDonald's", cost: 10.50, date_of_expense: "01/01/01", user_id: 1, category_id: c7.id )
Expense.create(item: "Olive Garden", cost: 38.50, date_of_expense: "01/01/01", user_id: 1, category_id: c7.id )
Expense.create(item: "Netflix", cost: 16.00, date_of_expense: "01/01/01", user_id: 1, category_id: c8.id )
Expense.create(item: "Spotify", cost: 8.00, date_of_expense: "01/01/01", user_id: 1, category_id: c8.id )
Expense.create(item: "Disney +", cost: 10.00, date_of_expense: "01/01/01", user_id: 1, category_id: c8.id )

puts "I seeded!!!"