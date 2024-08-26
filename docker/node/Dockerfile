FROM node:20.11.1

ENV ENV=${ENV}
COPY ./nextjs_boot.sh /usr/local/sbin/
RUN chmod 755 /usr/local/sbin/nextjs_boot.sh
ENTRYPOINT ["/usr/local/sbin/nextjs_boot.sh"]