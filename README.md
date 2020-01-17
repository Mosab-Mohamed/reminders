<h1 align="center">
  Reminders
</h1>

<p align="center">
  <a href="#requirements">Requirements</a> •
  <a href="#how-to-use">How To Use</a> 
</p>

---

## Requirements

- `Rails 5.2.x`
- `Node >=4 <=12`
- `PostgreSQL 9.5.12`
- `foreman gem 0.85.0`, [github](https://github.com/ddollar/foreman)
- `redis-cli 4.0.9`, [installation info](https://redis.io/download)
- `Sidekiq 5.1.1`

---

## How To Use

### Prerequisites

```bash
  yarn install                        # to install the javascript libraries used
  rails db:create                     # to create the developemtn database if not found
  rails db:migrate                    # to apply any pending migration
```

### Run Reminders

```bash
  foreman start -p 3000               # the application will be in localhost:3000
```

this command will start

1- `rails` server for back-end development

2- [webpacker](https://github.com/rails/webpacker) development server for front-end development

3- `redis` and `sidekiq` for background jobs
