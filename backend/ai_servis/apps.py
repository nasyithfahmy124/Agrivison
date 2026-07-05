import os
import logging
from django.apps import AppConfig


logger = logging.getLogger(__name__)
class AiServisConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "ai_servis"

    model = None
    class_names: list[str] = []

    def ready(self):
        if os.environ.get("RUN_MAIN") != "true":
            return

        try:
            os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"  
            
            import tf_keras as keras  

            BASE_DIR = os.path.dirname(os.path.abspath(__file__))
            model_path = os.path.join(BASE_DIR, "ml_models", "keras_Model.h5")
            labels_path = os.path.join(BASE_DIR, "ml_models", "labels.txt")
            AiServisConfig.model = keras.models.load_model(model_path, compile=False)

            with open(labels_path, "r") as f:
                AiServisConfig.class_names = [
                    line.strip().split(" ", 1)[1] for line in f.readlines() if line.strip()
                ]

            logger.info(
                f"[ai_servis] Model AI berhasil dimuat via tf-keras! Total kelas: {len(AiServisConfig.class_names)}"
            )

        except FileNotFoundError as e:
            logger.error(f"[ai_servis] File model/label tidak ditemukan: {e}")
        except Exception as e:
            logger.exception(f"[ai_servis] Gagal memuat model: {e}")