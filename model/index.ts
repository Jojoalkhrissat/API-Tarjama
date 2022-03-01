import {Expense} from './expenses';
import {User} from './user';
import {Category} from './category';

User.hasOne(Category, {
    foreignKey: 'user_id'
  });
Category.belongsTo(User, {
    foreignKey: 'user_id'
  });
User.hasOne(Expense, {
    foreignKey: 'user_id'
  });
Expense.belongsTo(User, {
    foreignKey: 'user_id'
  });
Category.hasOne(Expense, {
    foreignKey: 'category_id'
  });
Expense.belongsTo(Category, {
    foreignKey: 'category_id'
  });


async function syncDb() {
    await User.sync({force:true})
    await Category.sync({force:true})
    await Expense.sync({force:true})
}

export {
    Expense, 
    User, 
    Category,
    syncDb
}