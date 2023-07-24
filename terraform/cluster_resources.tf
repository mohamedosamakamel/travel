resource "kubernetes_deployment" "sample_deployments" {
  for_each = toset(var.top_level_domains)
  metadata {
    name      = "${replace(each.value, ".", "-")}-deployment"
    namespace = "default"
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "${replace(each.value, ".", "-")}-deployment"
      }
    }
    template {
      metadata {
        labels = {
          app = "${replace(each.value, ".", "-")}-deployment"
        }
      }
      spec {
        container {
          image =  "mohamedlato/digital-ocean" /* "registry.digitalocean.com/kubernetes-github-actions/my-sample-page:1" */
          name  = "nginx-hello"
          port {
            container_port = 80
          }

          env {
            name  = "PORT"
            value = "80"
          }
          env {
            name  = "MONGODB_URI"
            value = "mongodb+srv://remah:remah654312@cdc.81unkbn.mongodb.net/change-streams?retryWrites=true&w=majority"
          }
          env {
            name  = "api_key"
            value = "remah"
          }
          env {
            name  = "CLOUDINARY_URL"
            value = "cloudinary://716494354337253:x5gdQ2S2bshPvJ0YmvEwd4715YQ@hamza2021"
          }
          env {
            name  = "JWT_SECRET"
            value = "supersecret"
          }
          env {
            name  = "clientID"
            value = "1017089558534-sg5lphbqs179g9fm3b5qcrigl6l2br20.apps.googleusercontent.com"
          }
          env {
            name  = "clientSecret"
            value = "d2q1gNN96PNi5Xyb-gI3PFGN"
          }
          env {
            name  = "TWILIO_AUTH_TOKEN"
            value = "21260d2db9e10751a20c5c10a227244b"
          }
          env {
            name  = "TWILIO_ACCOUNT_SID"
            value = "AC2a7cefcd9c7c7714440d00eca7aa7720"
          }
          env {
            name  = "TWILIO_ACCOUNT_VERIFY_SID"
            value = "VAdf43c41c1e54c08f202f283e0b100e47"
          }
          env {
            name  = "facebookUrl"
            value = "https://graph.facebook.com/v2.12/me?fields=id,name,email,gender,picture{url}"
          }
          env {
            name  = "cloud_name"
            value = "dqfrk92mp"
          }
          env {
            name  = "api_secret"
            value = "zUSdqm663H7lfMKqdirIGZxu318"
          }
          env {
            name  = "AMQP_URL"
            value = "amqps://kmuergjm:Q3oBdA_iX3triTcv_2YopwdL4AtHkz8D@jaguar.rmq.cloudamqp.com/kmuergjm"
          }
          env {
            name  = "REDIS_HOST"
            value = "redis-11356.c262.us-east-1-3.ec2.cloud.redislabs.com"
          }
          env {
            name  = "REDIS_PORT"
            value = "11356"
          }
          env {
            name  = "REDIS_PASS"
            value = "7gjZsWKNcuA5ShDNOChqSfaMaaSWRAWI"
          }
          env {
            name  = "DO_SPACE_ACCESS_KEY"
            value = "64FK4EFQPL5R2QDT3REM"
          }
          env {
            name  = "DO_SPACE_SECRET_KEY"
            value = "d0TwCfDscf+2++I2qK9KFWOis7cbfr8BQR6z3CYjTg8"
          }
          env {
            name  = "DO_SPACE_BUCKET_NAME"
            value = "remah"
          }
          env {
            name  = "DO_SPACE_END_POINT"
            value = "fra1.digitaloceanspaces.com"
          }
          env {
            name  = "projectId"
            value = "remah-a60ee"
          }
          env {
            name  = "privateKey"
            value = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4obybMvBe162S\nU5pUAK4V7c/Ki/8rxStg5SG5sNetGcZGmO13YEahy95DK1WoAIQVokfHhVEs9gzw\nIQc93Tr0pTTNwHFCOvusbKuBvKbJcbZRJG6VrY477Wv6ZdDOf8L9gVY2nRWuylLC\nouiQcI1JFhd1Lx+rrQDYM3NmaC+sgSpbtOsk3A3u24M8WhqEwdVi0gCh/2njVk2E\niCOFGF+rlPRBx94hTiVXVhJ2z0H0u9H0kqFUVwTEKriONGe6h6B/2UMJ3SKPAgHI\n+Kg6BmYcJNcTiKN31nXLVsQFNGecSlhP90OZXRugJySpJIYncaiD0WZNuStNYRZ5\nkb6MLFunAgMBAAECggEALzk7Du0j+vYqUItupT65SCWX6MQPA6h+NF3W1vJq77zw\ncF0sG8T1u+tzkXWThpF/NzNXLaqlPR0/6Olhu0qLCkj5LQkkTt7cQVlYMqpIdKzP\nh4iMel82SpCq9hQ1qKOYAZQjs3tRMPBR47OcTVlkYcWzQUdIz/XDigj64r4SN4ow\npcJaGody6ChJb8pYohMuJDqmgfx6MNdWltMcXz3tRQStQjYKp8RzF5Bs1LUiHK/v\nB6U/sGm/nrrW9Dz85toz7eZxibrX8ZjW2gu72s8Og1dC/YtHdiSQSgrqLRPZRQWG\nnpD7jzhU/o5tarMSKcOy3RHXj3UpaKLmMbG3U0X2RQKBgQDlagI7fqIshb5pWDBm\nnVBKH9OuEgXCn2vWdASiYgmw9iJYA5AAcvbUGQYl13GmVonLoheZ8V3p/FUnupHn\n4bvvYIUU/FS1REk5DU0UqoNKjr7HKSOu7JcZu2tCgWFtQ4uz79G9MBmp0V9qCFJt\neNzfxqLhFrw/gsREVo9HPdDmxQKBgQDOBy2m+AnT2tuirtvQ1qOr8BtZ79DnjHdI\niQnpdLKo5BMSKUpuax50GhoB6PCg2fZgOH+TKa4vuBbYCDXMKCIRKuZCYKNpBD52\nW08ewCm8ziYHSi9ddRhFgOh4lqWPjtGpVHohiv5lTyTjxvSdGCUHKPJebyPxi2V0\nQdh1qCc/ewKBgQCD/pFYP8z5Rt4+aEI42CxY6aT2U2JDD0yRb+E2uKeQzJ0H/My+\npWbEs70oyqOWK9ZOdm2T4h7BwLASErNeMi/aU7NeVqw6OxbSH4gI6u5tWGIF3vKr\n824gnQfilOREZIeduM75RhKN9WwraqxaVh7nFbejQFyBQjDAjPkU6UknbQKBgE7m\nfNs2njzd0cMJh/EAYgnUmATnTG+AYaYLpRocsNbxEUShP3nt1+nKnS8iEBTpo+rR\neDnZenWX4Fe3PTMEI5fDgA7nh20OTQVyjmhOWy2NHQ8pn94Am9zyMxULTDggD7bz\nPRpfanFNz+jTJpaKypNlYPw9P9ye76mIFedpEC7FAoGAU2lZrHzONOv/W44QBoND\nXa9pCPAsjMZzVdsuTjnYkfnRM3joVBsyGfjPDZTB6Mjqw+xs8exUYH1M5LPJfPwV\nsth3vf+FDOnZHZeO9QLrJBT/NWv13U2yKvVWG5qe/rysAm74xJhN1BIBTBpV0tYz\nF848ukELDG5gpdYC3lsY6J0=\n-----END PRIVATE KEY-----\n"
          }
          env {
            name  = "clientEmail"
            value = "firebase-adminsdk-nk15m@remah-a60ee.iam.gserviceaccount.com"
          }
          resources {
            limits = {
              memory = "512M"
              cpu    = "1"
            }
            requests = {
              memory = "256M"
              cpu    = "50m"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "sample_services" {
  for_each = toset(var.top_level_domains)
  metadata {
    name      = "${replace(each.value, ".", "-")}-service"
    namespace = "default"
  }
  spec {
    type = "LoadBalancer"
    selector = {

      app = "${replace(each.value, ".", "-")}-deployment"
    }
    port {
      port        = 80
      target_port = 80
    }

  }
}
