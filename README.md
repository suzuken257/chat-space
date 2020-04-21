# README
## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belong_to :group
- belong_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, unique: true|
### Sssociation
- has_many :masseges
- has_many :groups_users
- has_many :groups, through :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false, unique: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, througn :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
### Association
- belong_to :group
- belong_to :user
