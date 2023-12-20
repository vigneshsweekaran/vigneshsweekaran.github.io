FROM ruby:3.2.2 as builder

WORKDIR /app
COPY Gemfile* ./
RUN bundle install

COPY . .
RUN jekyll build

FROM nginx:1.25.3

COPY --from=builder /app/_site/ /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]